const VISITOR_PROFILE_KEY = "coreEdgeVisitorProfile";
const HOME_VISIT_SENT_KEY = "coreEdgeHomeVisitSent";

export function getStoredVisitorProfile() {
  if (typeof window === "undefined") {
    return { fullName: "", email: "" };
  }

  try {
    const raw = window.localStorage.getItem(VISITOR_PROFILE_KEY);
    if (!raw) {
      return { fullName: "", email: "" };
    }

    const parsed = JSON.parse(raw);
    return {
      fullName: parsed.fullName || "",
      email: parsed.email || "",
    };
  } catch (error) {
    console.error("Unable to read saved visitor profile", error);
    return { fullName: "", email: "" };
  }
}

export function saveVisitorProfile(fullName = "", email = "") {
  if (typeof window === "undefined") {
    return;
  }

  const normalizedName = (fullName || "").trim();
  const normalizedEmail = (email || "").trim();

  if (!normalizedName && !normalizedEmail) {
    return;
  }

  window.localStorage.setItem(
    VISITOR_PROFILE_KEY,
    JSON.stringify({
      fullName: normalizedName,
      email: normalizedEmail,
    })
  );
}

export function hasTrackedHomeVisit() {
  if (typeof window === "undefined") {
    return false;
  }

  return window.localStorage.getItem(HOME_VISIT_SENT_KEY) === "true";
}

export function markHomeVisitTracked() {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(HOME_VISIT_SENT_KEY, "true");
}
