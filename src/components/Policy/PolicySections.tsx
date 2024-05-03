import { FC } from 'react';

interface listProps {
  lists: any[];
}

interface sectionProps {
  info: any[];
}

const PolicySections: FC<sectionProps> = ({ info }) => {
  return info.map(({ id, headline, explain, lists }) => {
    return (
      <div key={id}>
        <div className="my-2 font-semibold">{headline}</div>
        {explain && <div className="my-2">{explain}</div>}
        {lists && <PolicyList lists={lists} />}
      </div>
    );
  });
};

const PolicyList: FC<listProps> = ({ lists }) => {
  return (
    <ul className="mx-2">
      {lists.map(({ id, title, content, child = [] }) => {
        return (
          <li key={id}>
            {title && <p>{title}</p>}
            {content && <p className="mx-4">{content}</p>}
            {child.length > 0 && <PolicyList lists={child} />}
          </li>
        );
      })}
    </ul>
  );
};

export default PolicySections;
