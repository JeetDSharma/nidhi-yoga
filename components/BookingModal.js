"use client";
import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import styles from "./BookingModal.module.css";

export default function BookingModal({ isOpen, onClose, calLink }) {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi();
            cal("ui", {
                theme: "light",
                styles: { branding: { brandColor: "#FFDAB9" } },
                hideEventTypeDetails: false,
                layout: "month_view",
            });
        })();
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeBtn} onClick={onClose}>
                    &times;
                </button>
                <div style={{ width: "100%", height: "100%", overflow: "hidden" }}>
                    <Cal
                        calLink={calLink}
                        style={{ width: "100%", height: "100%", overflow: "scroll" }}
                        config={{ layout: "month_view" }}
                    />
                </div>
            </div>
        </div>
    );
}
