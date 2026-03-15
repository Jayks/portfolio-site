"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function AnalyticsTracker() {
    const pathname = usePathname();
    const hasTracked = useRef(false);

    useEffect(() => {
        // Only track once per page load to avoid strict mode double mounts
        if (hasTracked.current) return;
        hasTracked.current = true;

        // Check if we've already tracked this session (e.g. they refresh or navigate)
        const sessionId = "portfolio_session_tracked";
        if (sessionStorage.getItem(sessionId)) {
            return;
        }


        const trackVisit = async () => {
            try {
                // Fetch rough geolocation data
                let location = "Unknown Location";
                try {
                    const geoRes = await fetch("https://ipapi.co/json/");
                    if (geoRes.ok) {
                        const geoData = await geoRes.json();
                        location = `${geoData.city}, ${geoData.region}, ${geoData.country_name}`;
                    }
                } catch (geoError) {
                    console.error("Failed to fetch location", geoError);
                }

                await fetch("/api/notify", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        type: "pageview",
                        url: window.location.href,
                        userAgent: navigator.userAgent,
                        location: location,
                        referrer: document.referrer || "Direct Traffic",
                    }),
                });

                // Mark session as tracked so we don't spam on refresh
                sessionStorage.setItem(sessionId, "true");
            } catch (error) {
                // Silently fail if tracking fails, don't interrupt user experience
                console.error("Failed to track visit", error);
            }
        };
        const timeoutId = setTimeout(trackVisit, 1000);
        return () => clearTimeout(timeoutId);
    }, [pathname]);

    return null; // Invisible component
}
