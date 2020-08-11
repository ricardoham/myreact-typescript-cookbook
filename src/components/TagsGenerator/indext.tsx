import React, { useState } from 'react';
import { RemoveIcon, StyledTag } from './styles';

interface Props {
  tags?: string[];
  onAddTag?: (tags: any) => void;
  onRemoveTag?: (tags: any) => void;
}

const Tags = ({ tags, onAddTag, onRemoveTag }: Props) => {
  const [tagText, setTagText] = useState('');
  const [tag, setTag] = useState<string[]>(tags || []);

  const handleAddTag = (event: any) => {
    if (tagText !== '' && event === 'Enter') {
      onAddTag ? onAddTag([...tags, tagText]) : setTag([...tag, tagText]);
      setTagText('');
      return;
    }
  };

  const removeTag = (index: number) => {
    onRemoveTag
      ? onRemoveTag(tags.filter((_: any, i: number) => index !== i))
      : setTag(tag.filter((_: any, i: number) => index !== i));
  };

  return (
    <StyledTag>
      <StyledTag.Header>Tags</StyledTag.Header>
      <ul>
        {tags &&
          tags.map((t: string, index: number) => (
            <StyledTag.Item key={index}>
              <StyledTag.ItemText>{t}</StyledTag.ItemText>
              <RemoveIcon onClick={() => removeTag(index)} />
            </StyledTag.Item>
          ))}
      </ul>
      <StyledTag.Input
        value={tagText}
        onKeyUp={(e: any) => handleAddTag(e.key)}
        onChange={(e: any) => setTagText(e.target.value)}
        placeholder="Type to insert a Tag"
      />
    </StyledTag>
  );
};

export default Tags;
