import { Box, IconButton, SwipeableDrawer } from "@mui/material";
import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import CloseIcon from "@mui/icons-material/Close";

const CustomDrawer = ({ children, anchor, drawerFun }) => {
  return (
    <Box key={anchor} sx={{ width: "100vw" }}>
      {children}
      {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
      <SwipeableDrawer
        anchor={"right"}
        open={anchor}
        onClose={() => drawerFun(false)}
        onOpen={() => drawerFun(true)}
        style={{ zIndex: 1200000000 }}
      >
        <Box width={"24vw"}>
          <Box
            sx={{
              //   textAlign: "center",
              padding: "20px 30px",
              borderBottom: "1px solid #ded3bd70",
              fontWeight: "600",
              color: "#47507A",
              position: "sticky",
              top: "0",
              backgroundColor: "#fff",
              zIndex: "100000",
            }}
          >
            Recent history
            <IconButton
              sx={{
                position: "absolute",
                right: "12px",
                top: "8px",
              }}
              onClick={() => drawerFun(false)}
            >
              <CloseIcon
                sx={{
                  border: "1px solid #47507A",
                  borderRadius: "4px",
                  cursor: "pointer",
                  width: "20px",
                  height: "20px",
                }}
              />
            </IconButton>
          </Box>
          <Box style={{ padding: "0 10px" }}>
            <div
              style={{
                textAlign: "center",
                marginTop: "10px",
                color: "#1B509B",
                fontSize: "12px",
                fontWeight: "600",
              }}
            >
              Today
            </div>
            <div
            //   style={{
            //     display: "flex",
            //     justifyContent: "space-between",
            //     padding: "15px",
            //   }}
            >
              <ul style={{ marginTop: "10px" }}>
                <li
                  style={{
                    display: "flex",
                    margin: "0px",
                    backgroundColor: "#FAF9F7",
                    padding: "8px 10px",
                    borderLeft: "3px solid rgb(156, 39, 176)",
                    position: "relative",
                    rowGap: "8px",
                    flexDirection: "column",
                    height: "100px",
                    marginBottom: "15px",
                  }}
                >
                  {/* <AdjustIcon color="secondary" /> */}
                  <div
                    style={{
                      fontSize: "12px",

                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: "600",
                        width: "79px",
                        color: "#9C27B0",
                      }}
                    >
                      Modified By{" "}
                    </div>
                    <div style={{ marginLeft: "7px", color: "#2180ED" }}>
                      : Aron , George
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#212538",
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: "600",
                        width: "80px",
                        color: "#9C27B0",
                      }}
                    >
                      Old Value
                    </div>
                    <div style={{ marginLeft: "7px", color: "#2180ED" }}>
                      : 57937
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#212538",
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: "600",
                        width: "80px",
                        color: "#9C27B0",
                      }}
                    >
                      New Value
                    </div>
                    <div style={{ marginLeft: "7px", color: "#2180ED" }}>
                      : 56437
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: "10px",
                      color: "#64C8C8",
                      position: "absolute",
                      right: "13px",
                      bottom: "3px",
                    }}
                  >
                    15min ago
                  </div>
                </li>
                <li
                  style={{
                    display: "flex",
                    margin: "0px",
                    backgroundColor: "#FAF9F7",
                    padding: "8px 10px",
                    borderLeft: "3px solid rgb(156, 39, 176)",
                    position: "relative",
                    rowGap: "8px",
                    flexDirection: "column",
                    height: "100px",
                    marginBottom: "15px",
                  }}
                >
                  {/* <AdjustIcon color="secondary" /> */}
                  <div
                    style={{
                      fontSize: "12px",

                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: "600",
                        width: "79px",
                        color: "#9C27B0",
                      }}
                    >
                      Modified By{" "}
                    </div>
                    <div style={{ marginLeft: "7px", color: "#2180ED" }}>
                      : George , James
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#212538",
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: "600",
                        width: "80px",
                        color: "#9C27B0",
                      }}
                    >
                      Old Value
                    </div>
                    <div style={{ marginLeft: "7px", color: "#2180ED" }}>
                      : 65483
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#212538",
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: "600",
                        width: "80px",
                        color: "#9C27B0",
                      }}
                    >
                      New Value
                    </div>
                    <div style={{ marginLeft: "7px", color: "#2180ED" }}>
                      : 57937
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: "10px",
                      color: "#64C8C8",
                      position: "absolute",
                      right: "13px",
                      bottom: "3px",
                    }}
                  >
                    2hours ago
                  </div>
                </li>
                <li
                  style={{
                    display: "flex",
                    margin: "0px",
                    backgroundColor: "#FAF9F7",
                    padding: "8px 10px",
                    borderLeft: "3px solid rgb(156, 39, 176)",
                    position: "relative",
                    rowGap: "8px",
                    flexDirection: "column",
                    height: "100px",
                    marginBottom: "15px",
                  }}
                >
                  {/* <AdjustIcon color="secondary" /> */}
                  <div
                    style={{
                      fontSize: "12px",

                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: "600",
                        width: "79px",
                        color: "#9C27B0",
                      }}
                    >
                      Modified By{" "}
                    </div>
                    <div style={{ marginLeft: "7px", color: "#2180ED" }}>
                      : George , Aron
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#212538",
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: "600",
                        width: "80px",
                        color: "#9C27B0",
                      }}
                    >
                      Old Value
                    </div>
                    <div style={{ marginLeft: "7px", color: "#2180ED" }}>
                      : 87563
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#212538",
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: "600",
                        width: "80px",
                        color: "#9C27B0",
                      }}
                    >
                      New Value
                    </div>
                    <div style={{ marginLeft: "7px", color: "#2180ED" }}>
                      : 65483
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: "10px",
                      color: "#64C8C8",
                      position: "absolute",
                      right: "13px",
                      bottom: "3px",
                    }}
                  >
                    5hours ago
                  </div>
                </li>
                <li
                  style={{
                    display: "flex",
                    margin: "0px",
                    backgroundColor: "#FAF9F7",
                    padding: "8px 10px",
                    borderLeft: "3px solid rgb(156, 39, 176)",
                    position: "relative",
                    rowGap: "8px",
                    flexDirection: "column",
                    height: "100px",
                    marginBottom: "15px",
                  }}
                >
                  {/* <AdjustIcon color="secondary" /> */}
                  <div
                    style={{
                      fontSize: "12px",

                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: "600",
                        width: "79px",
                        color: "#9C27B0",
                      }}
                    >
                      Modified By{" "}
                    </div>
                    <div style={{ marginLeft: "7px", color: "#2180ED" }}>
                      : Henry , James
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#212538",
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: "600",
                        width: "80px",
                        color: "#9C27B0",
                      }}
                    >
                      Old Value
                    </div>
                    <div style={{ marginLeft: "7px", color: "#2180ED" }}>
                      : 56437
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#212538",
                      display: "flex",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: "600",
                        width: "80px",
                        color: "#9C27B0",
                      }}
                    >
                      New Value
                    </div>
                    <div style={{ marginLeft: "7px", color: "#2180ED" }}>
                      : 87563
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: "10px",
                      color: "#64C8C8",
                      position: "absolute",
                      right: "13px",
                      bottom: "3px",
                    }}
                  >
                    9hours ago
                  </div>
                </li>
              </ul>
            </div>
          </Box>
          <Box style={{ padding: "0px 20px" }}>
            <div
              style={{
                textAlign: "center",
                marginTop: "10px",
                color: "#1B509B",
                fontSize: "12px",
                fontWeight: "600",
              }}
            >
              Yesterday
            </div>
            <ul style={{ marginTop: "10px" }}>
              <li
                style={{
                  display: "flex",
                  margin: "0px",
                  backgroundColor: "#FAF9F7",
                  padding: "8px 10px",
                  borderLeft: "3px solid rgb(156, 39, 176)",
                  position: "relative",
                  rowGap: "8px",
                  flexDirection: "column",
                  height: "100px",
                  marginBottom: "15px",
                }}
              >
                {/* <AdjustIcon color="secondary" /> */}
                <div
                  style={{
                    fontSize: "12px",

                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "600",
                      width: "79px",
                      color: "#9C27B0",
                    }}
                  >
                    Modified By{" "}
                  </div>
                  <div style={{ marginLeft: "7px", color: "#2180ED" }}>
                    : Henry , George
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#212538",
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "600",
                      width: "80px",
                      color: "#9C27B0",
                    }}
                  >
                    Old Value
                  </div>
                  <div style={{ marginLeft: "7px", color: "#2180ED" }}>
                    : 78435
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#212538",
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "600",
                      width: "80px",
                      color: "#9C27B0",
                    }}
                  >
                    New Value
                  </div>
                  <div style={{ marginLeft: "7px", color: "#2180ED" }}>
                    : 56437
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "10px",
                    color: "#64C8C8",
                    position: "absolute",
                    right: "13px",
                    bottom: "3px",
                  }}
                >
                  8:30 PM
                </div>
              </li>
              <li
                style={{
                  display: "flex",
                  margin: "0px",
                  backgroundColor: "#FAF9F7",
                  padding: "8px 10px",
                  borderLeft: "3px solid rgb(156, 39, 176)",
                  position: "relative",
                  rowGap: "8px",
                  flexDirection: "column",
                  height: "100px",
                  marginBottom: "15px",
                }}
              >
                {/* <AdjustIcon color="secondary" /> */}
                <div
                  style={{
                    fontSize: "12px",

                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "600",
                      width: "79px",
                      color: "#9C27B0",
                    }}
                  >
                    Modified By{" "}
                  </div>
                  <div style={{ marginLeft: "7px", color: "#2180ED" }}>
                    : George , James
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#212538",
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "600",
                      width: "80px",
                      color: "#9C27B0",
                    }}
                  >
                    Old Value
                  </div>
                  <div style={{ marginLeft: "7px", color: "#2180ED" }}>
                    : 96578
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#212538",
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "600",
                      width: "80px",
                      color: "#9C27B0",
                    }}
                  >
                    New Value
                  </div>
                  <div style={{ marginLeft: "7px", color: "#2180ED" }}>
                    : 78435
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "10px",
                    color: "#64C8C8",
                    position: "absolute",
                    right: "13px",
                    bottom: "3px",
                  }}
                >
                  5:45 PM
                </div>
              </li>
              <li
                style={{
                  display: "flex",
                  margin: "0px",
                  backgroundColor: "#FAF9F7",
                  padding: "8px 10px",
                  borderLeft: "3px solid rgb(156, 39, 176)",
                  position: "relative",
                  rowGap: "8px",
                  flexDirection: "column",
                  height: "100px",
                  marginBottom: "15px",
                }}
              >
                {/* <AdjustIcon color="secondary" /> */}
                <div
                  style={{
                    fontSize: "12px",

                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "600",
                      width: "79px",
                      color: "#9C27B0",
                    }}
                  >
                    Modified By{" "}
                  </div>
                  <div style={{ marginLeft: "7px", color: "#2180ED" }}>
                    : Andrew , Hentry
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#212538",
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "600",
                      width: "80px",
                      color: "#9C27B0",
                    }}
                  >
                    Old Value
                  </div>
                  <div style={{ marginLeft: "7px", color: "#2180ED" }}>
                    : 76586
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#212538",
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "600",
                      width: "80px",
                      color: "#9C27B0",
                    }}
                  >
                    New Value
                  </div>
                  <div style={{ marginLeft: "7px", color: "#2180ED" }}>
                    : 96578
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "10px",
                    color: "#64C8C8",
                    position: "absolute",
                    right: "13px",
                    bottom: "3px",
                  }}
                >
                  2:45 PM
                </div>
              </li>
              <li
                style={{
                  display: "flex",
                  margin: "0px",
                  backgroundColor: "#FAF9F7",
                  padding: "8px 10px",
                  borderLeft: "3px solid rgb(156, 39, 176)",
                  position: "relative",
                  rowGap: "8px",
                  flexDirection: "column",
                  height: "100px",
                  marginBottom: "15px",
                }}
              >
                {/* <AdjustIcon color="secondary" /> */}
                <div
                  style={{
                    fontSize: "12px",

                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "600",
                      width: "79px",
                      color: "#9C27B0",
                    }}
                  >
                    Modified By{" "}
                  </div>
                  <div style={{ marginLeft: "7px", color: "#2180ED" }}>
                    : James , Aron
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#212538",
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "600",
                      width: "80px",
                      color: "#9C27B0",
                    }}
                  >
                    Old Value
                  </div>
                  <div style={{ marginLeft: "7px", color: "#2180ED" }}>
                    : 56487
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#212538",
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "600",
                      width: "80px",
                      color: "#9C27B0",
                    }}
                  >
                    New Value
                  </div>
                  <div style={{ marginLeft: "7px", color: "#2180ED" }}>
                    : 76586
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "10px",
                    color: "#64C8C8",
                    position: "absolute",
                    right: "13px",
                    bottom: "3px",
                  }}
                >
                  9:30 AM
                </div>
              </li>
            </ul>
          </Box>
          <Box style={{ padding: "0px 20px" }}>
            <div
              style={{
                textAlign: "center",
                marginTop: "10px",
                color: "#1B509B",
                fontSize: "12px",
                fontWeight: "600",
              }}
            >
              Nov 19, 2023
            </div>
            <ul style={{ marginTop: "10px" }}>
              <li
                style={{
                  display: "flex",
                  margin: "0px",
                  backgroundColor: "#FAF9F7",
                  padding: "8px 10px",
                  borderLeft: "3px solid rgb(156, 39, 176)",
                  position: "relative",
                  rowGap: "8px",
                  flexDirection: "column",
                  height: "100px",
                  marginBottom: "15px",
                }}
              >
                {/* <AdjustIcon color="secondary" /> */}
                <div
                  style={{
                    fontSize: "12px",

                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "600",
                      width: "79px",
                      color: "#9C27B0",
                    }}
                  >
                    Modified By{" "}
                  </div>
                  <div style={{ marginLeft: "7px", color: "#2180ED" }}>
                    : Joseph , James
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#212538",
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "600",
                      width: "80px",
                      color: "#9C27B0",
                    }}
                  >
                    Old Value
                  </div>
                  <div style={{ marginLeft: "7px", color: "#2180ED" }}>
                    : 45234
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#212538",
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "600",
                      width: "80px",
                      color: "#9C27B0",
                    }}
                  >
                    New Value
                  </div>
                  <div style={{ marginLeft: "7px", color: "#2180ED" }}>
                    : 56487
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "10px",
                    color: "#64C8C8",
                    position: "absolute",
                    right: "13px",
                    bottom: "3px",
                  }}
                >
                  9:50 PM
                </div>
              </li>
              <li
                style={{
                  display: "flex",
                  margin: "0px",
                  backgroundColor: "#FAF9F7",
                  padding: "8px 10px",
                  borderLeft: "3px solid rgb(156, 39, 176)",
                  position: "relative",
                  rowGap: "8px",
                  flexDirection: "column",
                  height: "100px",
                  marginBottom: "15px",
                }}
              >
                {/* <AdjustIcon color="secondary" /> */}
                <div
                  style={{
                    fontSize: "12px",

                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "600",
                      width: "79px",
                      color: "#9C27B0",
                    }}
                  >
                    Modified By{" "}
                  </div>
                  <div style={{ marginLeft: "7px", color: "#2180ED" }}>
                    : James , hentry
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#212538",
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "600",
                      width: "80px",
                      color: "#9C27B0",
                    }}
                  >
                    Old Value
                  </div>
                  <div style={{ marginLeft: "7px", color: "#2180ED" }}>
                    : 89546
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#212538",
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "600",
                      width: "80px",
                      color: "#9C27B0",
                    }}
                  >
                    New Value
                  </div>
                  <div style={{ marginLeft: "7px", color: "#2180ED" }}>
                    : 45234
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "10px",
                    color: "#64C8C8",
                    position: "absolute",
                    right: "13px",
                    bottom: "3px",
                  }}
                >
                  7:20 PM
                </div>
              </li>
              <li
                style={{
                  display: "flex",
                  margin: "0px",
                  backgroundColor: "#FAF9F7",
                  padding: "8px 10px",
                  borderLeft: "3px solid rgb(156, 39, 176)",
                  position: "relative",
                  rowGap: "8px",
                  flexDirection: "column",
                  height: "100px",
                  marginBottom: "15px",
                }}
              >
                {/* <AdjustIcon color="secondary" /> */}
                <div
                  style={{
                    fontSize: "12px",

                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "600",
                      width: "79px",
                      color: "#9C27B0",
                    }}
                  >
                    Modified By{" "}
                  </div>
                  <div style={{ marginLeft: "7px", color: "#2180ED" }}>
                    : Andrew , James
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#212538",
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "600",
                      width: "80px",
                      color: "#9C27B0",
                    }}
                  >
                    Old Value
                  </div>
                  <div style={{ marginLeft: "7px", color: "#2180ED" }}>
                    : 67547
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#212538",
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "600",
                      width: "80px",
                      color: "#9C27B0",
                    }}
                  >
                    New Value
                  </div>
                  <div style={{ marginLeft: "7px", color: "#2180ED" }}>
                    : 89546
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "10px",
                    color: "#64C8C8",
                    position: "absolute",
                    right: "13px",
                    bottom: "3px",
                  }}
                >
                  11:20 AM
                </div>
              </li>
              <li
                style={{
                  display: "flex",
                  margin: "0px",
                  backgroundColor: "#FAF9F7",
                  padding: "8px 10px",
                  borderLeft: "3px solid rgb(156, 39, 176)",
                  position: "relative",
                  rowGap: "8px",
                  flexDirection: "column",
                  height: "100px",
                  marginBottom: "15px",
                }}
              >
                {/* <AdjustIcon color="secondary" /> */}
                <div
                  style={{
                    fontSize: "12px",

                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "600",
                      width: "79px",
                      color: "#9C27B0",
                    }}
                  >
                    Modified By{" "}
                  </div>
                  <div style={{ marginLeft: "7px", color: "#2180ED" }}>
                    : Aron , Andrew
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#212538",
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "600",
                      width: "80px",
                      color: "#9C27B0",
                    }}
                  >
                    Old Value
                  </div>
                  <div style={{ marginLeft: "7px", color: "#2180ED" }}>
                    : 65876
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#212538",
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      fontWeight: "600",
                      width: "80px",
                      color: "#9C27B0",
                    }}
                  >
                    New Value
                  </div>
                  <div style={{ marginLeft: "7px", color: "#2180ED" }}>
                    : 67547
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "10px",
                    color: "#64C8C8",
                    position: "absolute",
                    right: "13px",
                    bottom: "3px",
                  }}
                >
                  8:20 AM
                </div>
              </li>
            </ul>
          </Box>
        </Box>
      </SwipeableDrawer>
    </Box>
  );
};

export default CustomDrawer;
