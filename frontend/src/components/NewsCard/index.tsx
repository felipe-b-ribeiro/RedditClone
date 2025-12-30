import { SC_NewsCard,
     SC_NewsCardHeader,
     SC_NewsCardJoinButton,
     SC_NewsCardBody,
     SC_NewsCardBodyContent,
     SC_NewsCardBodyImage,
     SC_NewsCardFooter } from './styles';
import AvatarImg from '../../assets/avatar.png';
import ArrowIcon from '../icons/Arrow';
import ComentIcon from '../icons/Coment';
import AwardIcon from '../icons/Award';
import ShareIcon from '../icons/Share';
import EllipsesIcon from '../icons/Ellipses';
import { SC_IconWrapper } from '../ProfileMenu/styles';


type NewsCardProps = {
    subReddit: string,
    createdAt: string,
    title?: string,
    description?: string
    downVotes: number,
    coments: number
    img: string
}

const NewsCard = ({
    subReddit = 'r/teste',
    createdAt = '1d ago',
    title = 'This is a Reddit Clone Application',
    description = 'Developed a Reddit clone using React, TypeScript, and Styled-Components.',
    downVotes,
    coments,
    img
    }: NewsCardProps) => {
    return (
        <SC_NewsCard>
        <SC_NewsCardHeader>
            <div className='flx'>
                <div className='flx a-center' >
                    <img style={{borderRadius: '50%', marginRight: '7px'}} width='24px' height="24px" src={AvatarImg} alt="Imagem do SubReddit" />
                    <p>{subReddit} • {createdAt}</p>
                </div>
            </div>
            <div className='flx'>
                <div className='flx a-center g-5'>
                    <SC_NewsCardJoinButton>
                        Join
                    </SC_NewsCardJoinButton>
                    <SC_IconWrapper>
                        <EllipsesIcon />
                    </SC_IconWrapper>
                </div>
            </div>
        </SC_NewsCardHeader>
        <SC_NewsCardBody>
            <SC_NewsCardBodyContent>
                <h3>{title}</h3>
                <p>{description}</p>
            </SC_NewsCardBodyContent>
            <SC_NewsCardBodyImage src={img} alt="News related" />
        </SC_NewsCardBody>
        <SC_NewsCardFooter>
            <SC_IconWrapper back='var(--interation-buttons-bg)' pill>
                <ArrowIcon />
                <span>{downVotes}</span>
                <ArrowIcon down />
            </SC_IconWrapper>
            <SC_IconWrapper back='var(--interation-buttons-bg)' pill>
                <ComentIcon />
                <span>{coments}</span>
            </SC_IconWrapper>
            <SC_IconWrapper back='var(--interation-buttons-bg)' pill>
                <AwardIcon />
            </SC_IconWrapper>
            <SC_IconWrapper back='var(--interation-buttons-bg)' pill>
                <ShareIcon />
                <span>Share</span>
            </SC_IconWrapper>
        </SC_NewsCardFooter>
        </SC_NewsCard>
    )
}

export default NewsCard;