import { useNavigate } from 'react-router-dom';

const useNavigateCustom = () => {
    const navigate = useNavigate();

    const goTo =  (path: string) => {
        navigate(path);
    }

    const goBack = () => {
        navigate(-1);
    }
    
    return { goTo, goBack }
}

export default useNavigateCustom;