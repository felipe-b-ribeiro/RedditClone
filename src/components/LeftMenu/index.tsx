import { SC_LeftMenu, SC_LeftMenuItem, SC_HrVertical, SC_MenuButton } from "./styles";
import HomeIcon from '../icons/Home';
import PopularIcon from "../icons/Popular";
import ExploreIcon from "../icons/Explore";
import PlusIcon from "../icons/Plus";
import DownIcon from "../icons/Down";
import MenuIcon from "../icons/Menu";

export default function LeftMenu() {
    return (
        <SC_LeftMenu>
            <ul>
                <SC_LeftMenuItem>
                    <HomeIcon />
                    <span>Home</span>
                </SC_LeftMenuItem>
                <SC_LeftMenuItem>
                    <PopularIcon />
                    <span>Popular</span>
                </SC_LeftMenuItem>
                <SC_LeftMenuItem>
                    <ExploreIcon />
                    <span>Explore</span>
                </SC_LeftMenuItem>
                <SC_LeftMenuItem>
                    <PlusIcon />
                    <span>Start a Community</span>
                </SC_LeftMenuItem>
                <hr className="sep" />
                <SC_LeftMenuItem className="featured">
                    <span>GAMES ON REDDIT</span>
                    <DownIcon />
                </SC_LeftMenuItem>
                <hr className="sep" />
                <SC_LeftMenuItem className="featured">
                    <span>CUSTOM FEEDS</span>
                    <DownIcon />
                </SC_LeftMenuItem>
                <hr className="sep" />
                <SC_LeftMenuItem className="featured">
                    <span>RECENT</span>
                    <DownIcon />
                </SC_LeftMenuItem>
                <hr className="sep" />
                <SC_LeftMenuItem className="featured">
                    <span>COMMUNITIES</span>
                    <DownIcon />
                </SC_LeftMenuItem>
                <hr className="sep" />
                <SC_LeftMenuItem className="featured">
                    <span>RESOURCES</span>
                    <DownIcon />
                </SC_LeftMenuItem>
            </ul>
            <p>
                <a href="https://redditinc.com">Reddit, Inc. © 2025. All rights reserved.</a>
            </p>
            <SC_HrVertical />
            <SC_MenuButton>
                <MenuIcon />
            </SC_MenuButton>
        </SC_LeftMenu>
    );
}