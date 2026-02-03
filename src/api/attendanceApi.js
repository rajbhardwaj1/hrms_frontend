import api from "./axios";

// Mark attendance
export const markAttendance = (data) => {
  return api.post("/attendance/", data);
};

// Get attendance (optional date filter)
export const getAttendance = (date) => {
  return api.get("/attendance/", {
    params: date ? { date } : {},
  });
};

// Get attendance summary
export const getAttendanceSummary = () => {
  return api.get("/attendance/summary/");
};
