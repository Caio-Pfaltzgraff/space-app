import styled from 'styled-components'
import tags from './tags.json'

const TagsContainer = styled.section`
    margin-top: 56px;
    display: flex;
    align-items: center;
    gap: 64px;
`;

const TagTitle = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    margin: 0;
`;

const Div = styled.div`
    display: flex;
    gap: 24px;
    justify-content: end;
`;

const Tag = styled.button`
    font-size: 24px;
    color: #FFF;
    background: rgba(217, 217, 217, 0.3);
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3 ease;
    padding: 10px 8px;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover{
        border-color: #C98CF1;
    }
`;

const Tags = () => {
    return (
        <TagsContainer>
            <TagTitle>Busque por tags:</TagTitle>
            <Div>
                {tags.map(tag => (
                    <Tag key={tag.id}>{tag.titulo}</Tag>
                ))}
            </Div>
        </TagsContainer>
    )
}

export default Tags