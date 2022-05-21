import React, { ChangeEvent, useState } from 'react';
import * as S from './styles';

interface Props {
  tags?: string[];
  onAddTag?: (tags: [...string[], string]) => void;
  onRemoveTag?: (tags: string[]) => void;
}

const Tags = ({ tags, onAddTag, onRemoveTag }: Props): JSX.Element => {
  const [tagText, setTagText] = useState('');
  const [tag, setTag] = useState<string[]>(tags || []);

  const handleAddTag = (event: string): void => {
    if (tagText !== '' && event === 'Enter') {
      onAddTag && tags ? onAddTag([...tags, tagText]) : setTag([...tag, tagText]);
      setTagText('');
      return;
    }
  };

  const removeTag = (index: number): void => {
    onRemoveTag && tags
      ? onRemoveTag(tags.filter((_, i: number) => index !== i))
      : setTag(tag.filter((_, i: number) => index !== i));
  };

  return (
    <S.StyledTag>
      <S.StyledTagHeader>Tags</S.StyledTagHeader>
      <ul>
        {tags &&
          tags.map((t: string, index: number) => (
            <S.StyledTagItem key={index}>
              <S.StyledTagItemText>{t}</S.StyledTagItemText>
              <S.RemoveIcon onClick={(): void => removeTag(index)} />
            </S.StyledTagItem>
          ))}
      </ul>
      <S.StyledTagInput
        value={tagText}
        onKeyUp={(e: { key: string }): void => handleAddTag(e.key)}
        onChange={(e: ChangeEvent<{ value: string }>): void => setTagText(e.target.value)}
        placeholder="Type to insert a Tag"
      />
    </S.StyledTag>
  );
};

export default Tags;
