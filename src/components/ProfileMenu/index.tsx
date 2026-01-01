import { SC_MenuWrapper, SC_IconWrapper, SC_AvatarWrapper } from "./styles";
import AdvertiseIcon from "../icons/Advertise";
import ChatIcon from "../icons/Chat";
import CreateIcon from "../icons/Create";
import InboxIcon from "../icons/Inbox";
import AvatarImg from '../../assets/avatar.png';

export default function ProfileMenu() {
    return (
        <SC_MenuWrapper>
            <div className="flx">
                <SC_IconWrapper>
                    <AdvertiseIcon />
                </SC_IconWrapper>
                <SC_IconWrapper>
                    <ChatIcon />
                </SC_IconWrapper>
                <SC_IconWrapper>
                    <CreateIcon />
                    <span>Create</span>
                </SC_IconWrapper>
                <SC_IconWrapper>
                    <InboxIcon />
                </SC_IconWrapper>
            </div>
            <SC_AvatarWrapper>
                <img width='32px' height='32px' src={AvatarImg} alt="User Avatar" />
                <span></span>
            </SC_AvatarWrapper>
        </SC_MenuWrapper>

    );
}