import * as React from "react";
import { Platform } from "react-native";
import { Container, Content, Header, Body, Title, Button, Text, View, Icon, Footer } from "native-base";
class Login extends React.Component {
    render() {
        return (React.createElement(Container, null,
            React.createElement(Header, { style: { height: 200 } },
                React.createElement(Body, { style: { alignItems: "center" } },
                    React.createElement(Icon, { name: "flash", style: { fontSize: 104 } }),
                    React.createElement(Title, null, "Bit React Native"),
                    React.createElement(View, { padder: true },
                        React.createElement(Text, { style: { color: Platform.OS === "ios" ? "#000" : "#FFF" } })))),
            React.createElement(Content, null,
                this.props.loginForm,
                React.createElement(View, { padder: true },
                    React.createElement(Button, { block: true, onPress: () => this.props.onLogin() },
                        React.createElement(Text, null, "\u0648\u0631\u0648\u062F")))),
            React.createElement(Footer, { style: { backgroundColor: "#F8F8F8" } },
                React.createElement(View, { style: { alignItems: "center", opacity: 0.5, flexDirection: "row" } },
                    React.createElement(View, { padder: true },
                        React.createElement(Text, { style: { color: "#000" } }, "Made with love at Bit Foundation"))))));
    }
}
export default Login;
//# sourceMappingURL=index.js.map