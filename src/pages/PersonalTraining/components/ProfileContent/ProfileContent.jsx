import PROFILE_CONTENT_TITLE from '../../../../constants/profileTitle';

export const ProfileContent = ({ data }) => (
  <>
    {PROFILE_CONTENT_TITLE.map(text => (
      <>
        <div className={`${data[text.keyText] !== null ? 'titleText' : ''}`}>
          {data[text.keyText] !== null ? text.title : ''}
        </div>
        {data[text.keyText]?.map(text => (
          <div className="contentText" key={text}>
            {text}
          </div>
        ))}
      </>
    ))}
  </>
);
