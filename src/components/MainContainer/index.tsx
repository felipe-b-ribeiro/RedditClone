import { SC_MainContainer, SC_PostsContainer, SC_MenuContainer, SC_MenuItem, SC_MenuItem2 } from "./styles";
import NewsCard from "../NewsCard";
import DownIcon from "../icons/Down";
import PostIcon from "../icons/Post";
import Card1 from '../../assets/card-1.jpg';
import Card2 from '../../assets/card-2.jpg';
import Card3 from '../../assets/card-3.jpg';
import Card4 from '../../assets/card-4.jpg';

export default function MainContainer() {
    return (
        <SC_MainContainer>
            <SC_PostsContainer>
                <SC_MenuContainer>
                    <div className="flx g-10">
                        <SC_MenuItem>Home</SC_MenuItem>
                        <SC_MenuItem>Popular</SC_MenuItem>
                        <SC_MenuItem>News</SC_MenuItem>
                        <SC_MenuItem>Reddit Games</SC_MenuItem>
                    </div>
                    <div className="flx g-10">
                        <SC_MenuItem2>
                            <span>Best</span>
                            <DownIcon />
                        </SC_MenuItem2>
                        <SC_MenuItem2>
                            <PostIcon />
                            <DownIcon />
                        </SC_MenuItem2>
                    </div>
                </SC_MenuContainer>
                <hr />
                <NewsCard
                    subReddit='r/test'
                    createdAt="1 day ago"
                    title="Introducing Reddit Clone"
                    description="A Reddit clone built with React, TypeScript, and Styled-Components."
                    downVotes={120}
                    coments={45}
                    img={Card1}
                />
                <hr />
                <NewsCard
                    subReddit='r/aboutme'
                    createdAt="12 hr. ago"
                    title="I'm Felipe, a Software Developer"
                    description="Always searching for a new challenge about building web applications and learning new technologies."
                    downVotes={32}
                    coments={8}
                    img={Card2}
                />
                <hr />
                <NewsCard
                    subReddit='r/whyprogramming'
                    createdAt="2 days ago"
                    title="This project was developed to improve my skills"
                    description="I like to do new study projects and learn new technologies from practice. Of course, theory is important too."
                    downVotes={3}
                    coments={13}
                    img={Card3}
                />
                <hr />
                <NewsCard
                    subReddit='r/concepts'
                    createdAt="4 hr. ago"
                    title="I love question the why above the how"
                    description="Understanding the reason behind a concept is crucial for deep learning and application, at least, for me."
                    downVotes={54}
                    coments={83}
                    img={Card4}
                />
            </SC_PostsContainer>
        </SC_MainContainer>
    );
}