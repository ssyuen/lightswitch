import {Menu} from "antd";
import {Link, useLocation} from "react-router-dom";
import {Header} from "antd/es/layout/layout";

export const Navbar = () => {
    return (
        <>
            <Header>
                <div className="logo"/>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[useLocation().pathname]}>
                    <Menu.Item key={"/"}>
                        <Link to={"/"}>Home</Link>
                    </Menu.Item>
                    <Menu.Item key={"/comparison"}>
                        <Link to={"/comparison"}>Comparison</Link>
                    </Menu.Item>
                    <Menu.Item key={"/portfolio"}>
                        <Link to={"/portfolio"}>Portfolio</Link>
                    </Menu.Item>
                    <Menu.Item key={"/about"}>
                        <Link to={"/about"}>About</Link>
                    </Menu.Item>
                </Menu>
            </Header>
        </>
    )
}