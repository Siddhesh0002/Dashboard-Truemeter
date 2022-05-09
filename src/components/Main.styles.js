import { createStyles } from "@mantine/styles";

export default createStyles((theme) => ({
  side: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  btn: {
    backgroundColor: "#0CBC8B",
  },
  header: {
    marginTop: "30px",
    display: "flex",
    justifyContent: "space-between",
    marginRight: "50px",
  },
  product: {
    width: "100%",
    height: "110vh",
    backgroundColor: "#F6F6F6",
    marginTop: "30px",
    paddingLeft: "30px",
    paddingRight: "30px",
    borderRadius: "16px 0px 0px 16px",
  },
  container: {
    width: "100%",
    minHeight: "300px",
  },
  single: {
    lineHeight: 30,
    marginTop: 40,
  },
  divider: {
    width: "95%",
    margin: "auto",
    marginTop: 20,
  },
  btnContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  menu: {
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    gap: 30,
  },
  menuItem: {
    display: "flex",
    alignItems: "center",
    gap: 25,
    height: 30,
    marginLeft: 100,
    position: "relative",
    "&:hover": {
      cursor: "pointer",
    },
  },
  span: {
    marginLeft: 100,
    marginTop: 10,
    color: "#13AE96",
    fontSize: 18,
  },
  logo: {
    height: 150,
    width: 150,
    marginLeft: 100,
  },
  active: {
    backgroundColor: "#13AE96",
  },
  title: {
    fontSize: 26,
    fontWeight: 500,
  },
  innerLeft: {
    display: "flex",
    gap: 60,
    marginLeft: 20,
  },
  bottomLeft: {
    display: "flex",
    gap: 40,
    marginTop: 20,
    marginLeft: 20,
  },
  btnGroup: {
    border: "none",
    backgroundColor: "white",
    cursor: "pointer",
  },
  bottom: {
    display: "flex",
    gap: 15,
    justifyContent: "flex-end",
    alignItems: "center",
  },
}));
