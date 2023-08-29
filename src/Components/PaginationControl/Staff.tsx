import { Box, Typography } from "@mui/material";

const Staff = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        p: "5px",
        width: "75px",
        borderRadius: "13px",
        bgcolor: "#EDEDED",
        ml: "5px",
      }}
    >
      <svg
        width="20"
        height="21"
        viewBox="0 0 10 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 0.625C4.3099 0.625 3.65885 0.755208 3.04688 1.01562C2.44141 1.27604 1.91081 1.63411 1.45508 2.08984C1.00586 2.53906 0.651042 3.06641 0.390625 3.67188C0.130208 4.28385 0 4.9349 0 5.625C0 6.3151 0.130208 6.96615 0.390625 7.57812C0.651042 8.18359 1.00586 8.71419 1.45508 9.16992C1.91081 9.61914 2.44141 9.97396 3.04688 10.2344C3.65885 10.4948 4.3099 10.625 5 10.625C5.6901 10.625 6.34115 10.4948 6.95312 10.2344C7.55859 9.97396 8.08594 9.61914 8.53516 9.16992C8.99089 8.71419 9.34896 8.18359 9.60938 7.57812C9.86979 6.96615 10 6.3151 10 5.625C10 4.9349 9.86979 4.28385 9.60938 3.67188C9.34896 3.06641 8.99089 2.53906 8.53516 2.08984C8.08594 1.63411 7.55859 1.27604 6.95312 1.01562C6.34115 0.755208 5.6901 0.625 5 0.625ZM8.27148 6.62109C8.27148 6.79688 8.24219 6.96289 8.18359 7.11914C8.125 7.27539 8.04036 7.41536 7.92969 7.53906C7.82552 7.66276 7.69857 7.76042 7.54883 7.83203C7.4056 7.89714 7.25586 7.92969 7.09961 7.92969C6.77409 7.92969 6.4974 7.80273 6.26953 7.54883C6.04818 7.28841 5.9375 6.97917 5.9375 6.62109V4.63867C5.9375 4.56706 5.91471 4.50521 5.86914 4.45312C5.82357 4.40104 5.76823 4.375 5.70312 4.375C5.63151 4.375 5.57292 4.40104 5.52734 4.45312C5.48828 4.50521 5.46875 4.56706 5.46875 4.63867V6.62109C5.46875 6.79688 5.43945 6.96289 5.38086 7.11914C5.32227 7.27539 5.24089 7.41536 5.13672 7.53906C5.02604 7.66276 4.89909 7.76042 4.75586 7.83203C4.61263 7.89714 4.45964 7.92969 4.29688 7.92969C3.97135 7.92969 3.69466 7.80273 3.4668 7.54883C3.24544 7.28841 3.13477 6.97917 3.13477 6.62109V4.63867C3.13477 4.56706 3.11198 4.50521 3.06641 4.45312C3.02083 4.40104 2.96549 4.375 2.90039 4.375C2.83529 4.375 2.77995 4.40104 2.73438 4.45312C2.6888 4.50521 2.66602 4.56706 2.66602 4.63867V8.45703L1.71875 9.18945V4.62891C1.71875 4.45312 1.74479 4.28711 1.79688 4.13086C1.85547 3.97461 1.9401 3.83464 2.05078 3.71094C2.16146 3.58724 2.28841 3.49284 2.43164 3.42773C2.57487 3.35612 2.72461 3.32031 2.88086 3.32031C3.20638 3.32031 3.48307 3.45052 3.71094 3.71094C3.9388 3.96484 4.05273 4.27083 4.05273 4.62891V6.61133C4.05273 6.68294 4.07227 6.74479 4.11133 6.79688C4.1569 6.84896 4.21549 6.875 4.28711 6.875C4.35221 6.875 4.40755 6.84896 4.45312 6.79688C4.4987 6.74479 4.52148 6.68294 4.52148 6.61133V4.62891C4.52148 4.27083 4.63542 3.96484 4.86328 3.71094C5.09115 3.45052 5.36458 3.32031 5.68359 3.32031C6.00911 3.32031 6.28255 3.45052 6.50391 3.71094C6.73177 3.96484 6.8457 4.27083 6.8457 4.62891V6.61133C6.8457 6.68294 6.86849 6.74479 6.91406 6.79688C6.95964 6.84896 7.01497 6.875 7.08008 6.875C7.15169 6.875 7.20703 6.84896 7.24609 6.79688C7.29167 6.74479 7.31445 6.68294 7.31445 6.61133V2.79297L8.25195 2.06055V6.62109H8.27148Z"
          fill="black"
        />
      </svg>

      <Typography variant="body1" fontWeight={"bold"}>
        STAFF
      </Typography>
    </Box>
  );
};

export default Staff;