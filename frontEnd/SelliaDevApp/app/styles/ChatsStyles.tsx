import { StyleSheet } from "react-native";
import theme from "../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    paddingLeft:19
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  tabContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  list: {
    width: "100%",
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    width: "100%",
  },
  avatarContainer: {
    marginRight: 15,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: "#C4C4C4",
  },
  textContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  messageTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: theme.primary,
  },
  lastMessage: {
    fontSize: 14,
    color: "#757575",
  },
  time: {
    fontSize: 12,
    color: "#919191",
  },
  noDataText: {
    textAlign: "center",
    color: "#757575",
    fontSize: 16,
    padding: 20,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBar: {
    height: 50,
    backgroundColor: "#e5e5e5",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    justifyContent: "center",
    paddingHorizontal: 10,
    position: "relative",
  },
  searchInput: {
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingLeft: 30,
    fontSize: 16,
    color: "#333",
  },
  searchIcon: {
    position: "absolute",
    left: 15,
    top: "50%",
    transform: [{ translateY: -12 }],
  },
  menuText: {
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 15,
    color: "#000",
    borderRadius:5
  },
  menu:{
    backgroundColor:'red'
  }
});
