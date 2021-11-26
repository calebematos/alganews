import { transparentize } from "polished";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { User } from "../../sdk/@types";
import UserService from "../../sdk/service/User.service";
import getEditorDescription from "../../sdk/utils/getEditorDescription";
import FieldDescriptor from "../components/FieldDescriptor/FieldDescriptor";
import Profile from "../components/Profile";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import ValueDescriptor from "../components/ValueDescriptor/ValueDescriptor";

interface EditorProfileProps {
  hidePersonalData?: boolean;
}

function EditorProfile(props: EditorProfileProps) {
  const [editor, setEditor] = useState<User.EditorDetailed>();
  const params = useParams<{ id: string }>();

  useEffect(() => {
    UserService.getEditorById(Number(params.id)).then(setEditor);
  }, [params.id]);

  if (!editor) return null;

  return (
    <EditorProfileWrapper>
      <EditorHeadline>
        <Avatar src={editor.avatarUrls.small} />
        <Name>{editor.name}</Name>
        <Description>
          {getEditorDescription(new Date(editor.createdAt))}
        </Description>
      </EditorHeadline>

      <Divisor />

      <EditorFeatures>
        <PersonalInfo>
          <Biography>{editor.bio}</Biography>
          <Skills>
            {editor.skills?.map((skill) => {
              return (
                <ProgressBar
                  progress={skill.percentage}
                  title={skill.name}
                  theme={"primary"}
                />
              );
            })}
          </Skills>
        </PersonalInfo>
        <ContactInfo>
          <FieldDescriptor description={"City"} value={editor.location.city} />
          <FieldDescriptor
            description={"State"}
            value={editor.location.state}
          />
          {!props.hidePersonalData && (
            <>
              <FieldDescriptor
                description={"Cellphone"}
                value={"+55 27 99900-9999"}
              />
              <FieldDescriptor
                description={"Email"}
                value={"ana.castillo@redacao.algacontent.com"}
              />
              <FieldDescriptor
                description={"Birth"}
                value={"December, 26 1997 (22 years)"}
              />
            </>
          )}
        </ContactInfo>
      </EditorFeatures>

      {!props.hidePersonalData && (
        <EditorEarnings>
          <ValueDescriptor
            color={"default"}
            value={21452}
            description={"words this week"}
          />
          <ValueDescriptor
            color={"default"}
            value={123234}
            description={"words in the month"}
          />
          <ValueDescriptor
            color={"default"}
            value={12312312}
            description={"total words"}
          />
          <ValueDescriptor
            color={"primary"}
            value={545623.23}
            description={"earnings in the week"}
            isCurrency
          />
          <ValueDescriptor
            color={"primary"}
            value={545623.23}
            description={"earnings in the month"}
            isCurrency
          />
          <ValueDescriptor
            color={"primary"}
            value={545623.23}
            description={"total earnings"}
            isCurrency
          />
        </EditorEarnings>
      )}
    </EditorProfileWrapper>
  );
}

const EditorProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 16px;
  padding: 24px;
  border: 1px solid ${transparentize(0.9, "#274060")};
`;

const EditorHeadline = styled.div`
  display: grid;
  grid-template-columns: 48px auto;
  grid-template-rows: 2;

  align-items: center;
  gap: 8px 16px;
  height: 48px;
`;

const Avatar = styled.img`
  grid-row-start: 1;
  grid-row-end: 3;
  object-fit: contain;
  width: 48px;
  height: 48px;
`;
const Name = styled.h1`
  font-size: 18px;
  font-weight: 400;
  grid-column-start: 2;
`;
const Description = styled.span`
  font-size: 12px;
  grid-column-start: 2;
`;

const Divisor = styled.div`
  border-bottom: 1px solid ${transparentize(0.9, "#274060")};
`;

const EditorFeatures = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2;
  gap: 24px;
`;

const PersonalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const Biography = styled.p`
  font-size: 12px;
  line-height: 20px;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px 0;
  > * {
    width: 100%;
  }
  & > :nth-child(1),
  & > :nth-child(2) {
    width: 50%;
  }
`;

const Skills = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const EditorEarnings = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 24px;
`;

export default EditorProfile;
