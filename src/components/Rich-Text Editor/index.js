import React, { useState, useMemo, useCallback } from "react";

import {
  Container,
  RichTextContainer,
  Toolbar,
  Icon,
  Button,
  StyledTitle,
  StyledSubTitle,
  StyledBulletedList,
  StyledQuote,
} from "./styles";

import { createEditor, Editor, Transforms, Text } from "slate";
import { Slate, Editable, withReact, useSlate } from "slate-react";
import { withHistory } from "slate-history";

import {
  AiOutlineBold,
  AiOutlineItalic,
  AiOutlineUnderline,
  AiOutlineOrderedList,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { FaQuoteLeft } from "react-icons/fa";
import { FiAlignCenter, FiAlignRight, FiAlignJustify } from "react-icons/fi";

const LIST_TYPES = ["numbered-list", "bulleted-list"];
const initialState = [
  {
    type: "paragraph",
    children: [{ text: "This is editable " }],
  },
];

const RichText = ({
  value = initialState,
  setValue,
  toolbar = true,
  background = "--color-darker",
}) => {
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      case "title":
        return <TitleElement {...props} />;
      case "subTitle":
        return <SubTitleElement {...props} />;
      case "bulletedList":
        return <BulletedListElement {...props} />;
      case "quote":
        return <QuoteElement {...props} />;
      case "alignCenter":
        return <AlignCenterElemement {...props} />;
      case "alignRight":
        return <AlignRightElement {...props} />;
      case "justify":
        return <JustfyElement {...props} />;
      case "code":
        return <CodeElement {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  const renderLeaf = useCallback((props) => {
    return <Leaf {...props} />;
  }, []);

  function onKeyDown(event) {
    if (!event.ctrlKey) return;

    switch (event.key) {
      case "'": {
        event.preventDefault();
        return CustomEditor.toggleCodeBlock(editor);
      }

      case "b": {
        event.preventDefault();
        return CustomEditor.toggleBoldMark(editor);
      }

      case "i": {
        event.preventDefault();
        return CustomEditor.toggleItalicMark(editor);
      }

      case "u": {
        event.preventDefault();
        return CustomEditor.toggleUnderlineMark(editor);
      }

      default: {
        break;
      }
    }
  }

  return (
    <Container>
      <Slate
        editor={editor}
        value={value}
        onChange={(value) => setValue(value)}
      >
        {toolbar && (
          <Toolbar>
            <MarkButton format="bold">
              <Icon>
                <AiOutlineBold />
              </Icon>
            </MarkButton>
            <MarkButton format="italic">
              <Icon>
                <AiOutlineItalic />
              </Icon>
            </MarkButton>
            <MarkButton format="underline">
              <Icon>
                <AiOutlineUnderline />
              </Icon>
            </MarkButton>
            <MarkButton format="title">
              <Icon>1</Icon>
            </MarkButton>
            <MarkButton format="subTitle">
              <Icon>2</Icon>
            </MarkButton>
            <MarkButton format="bulletedList">
              <Icon>
                <AiOutlineUnorderedList />
              </Icon>
            </MarkButton>
            <MarkButton format="quote">
              <Icon>
                <FaQuoteLeft />
              </Icon>
            </MarkButton>
            <MarkButton format="alignCenter">
              <Icon>
                <FiAlignCenter />
              </Icon>
            </MarkButton>
            <MarkButton format="alignRight">
              <Icon>
                <FiAlignRight />
              </Icon>
            </MarkButton>
            <MarkButton format="justify">
              <Icon>
                <FiAlignJustify />
              </Icon>
            </MarkButton>
          </Toolbar>
        )}

        <RichTextContainer background={background}>
          <Editable
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            onKeyDown={onKeyDown}
            placeholder="Enter some rich text…"
          />
        </RichTextContainer>
      </Slate>
    </Container>
  );
};

const CustomEditor = {
  isBoldMarkActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.bold === true,
      universal: true,
    });

    return !!match;
  },

  isItalicMarkActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.italic === true,
      universal: true,
    });

    return !!match;
  },

  isUnderlineMarkActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.underline === true,
      universal: true,
    });

    return !!match;
  },

  isTitleBlockActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.type === "title",
    });

    return !!match;
  },

  isSubTitleBlockActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.type === "subTitle",
    });

    return !!match;
  },

  isBulletedListBlockActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.type === "bulletedList",
    });

    return !!match;
  },

  isQuoteBlockActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.type === "quote",
    });

    return !!match;
  },

  isalignCenterBlockActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.type === "alignCenter",
    });

    return !!match;
  },

  isAlignRightBlockActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.type === "alignRight",
    });

    return !!match;
  },

  isJustifyBlockActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.type === "justify",
    });

    return !!match;
  },

  isCodeBlockActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.type === "code",
    });

    return !!match;
  },

  toggleBoldMark(editor) {
    const isActive = CustomEditor.isBoldMarkActive(editor);
    Transforms.setNodes(
      editor,
      { bold: isActive ? null : true },
      { match: (n) => Text.isText(n), split: true }
    );
  },

  toggleItalicMark(editor) {
    const isActive = CustomEditor.isItalicMarkActive(editor);
    Transforms.setNodes(
      editor,
      { italic: isActive ? null : true },
      { match: (n) => Text.isText(n), split: true }
    );
  },

  toggleUnderlineMark(editor) {
    const isActive = CustomEditor.isUnderlineMarkActive(editor);
    Transforms.setNodes(
      editor,
      { underline: isActive ? null : true },
      { match: (n) => Text.isText(n), split: true }
    );
  },

  toggleTitleBlock(editor) {
    const isActive = CustomEditor.isTitleBlockActive(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? null : "title" },
      { match: (n) => Editor.isBlock(editor, n) }
    );
  },

  toggleSubTitleBlock(editor) {
    const isActive = CustomEditor.isSubTitleBlockActive(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? null : "subTitle" },
      { match: (n) => Editor.isBlock(editor, n) }
    );
  },

  toggleBulletedListBlock(editor, format) {
    const isActive = CustomEditor.isBulletedListBlockActive(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? null : "bulletedList" },
      { match: (n) => Editor.isBlock(editor, n) }
    );
  },

  toggleQuoteBlock(editor) {
    const isActive = CustomEditor.isQuoteBlockActive(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? null : "quote" },
      { match: (n) => Editor.isBlock(editor, n) }
    );
  },

  togglealignCenterBlock(editor) {
    const isActive = CustomEditor.isalignCenterBlockActive(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? null : "alignCenter" },
      { match: (n) => Editor.isBlock(editor, n) }
    );
  },

  toggleAlignRightBlock(editor) {
    const isActive = CustomEditor.isAlignRightBlockActive(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? null : "alignRight" },
      { match: (n) => Editor.isBlock(editor, n) }
    );
  },

  toggleJustifyBlock(editor) {
    const isActive = CustomEditor.isJustifyBlockActive(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? null : "justify" },
      { match: (n) => Editor.isBlock(editor, n) }
    );
  },

  toggleCodeBlock(editor) {
    const isActive = CustomEditor.isCodeBlockActive(editor);
    Transforms.setNodes(
      editor,
      { type: isActive ? null : "code" },
      { match: (n) => Editor.isBlock(editor, n) }
    );
  },
};

const Leaf = ({ attributes, leaf, children }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  return <span {...attributes}>{children}</span>;
};

const MarkButton = ({ format, children }) => {
  function isMarkActive(editor, format) {
    switch (format) {
      case "bold": {
        return CustomEditor.isBoldMarkActive(editor);
      }

      case "italic": {
        return CustomEditor.isItalicMarkActive(editor);
      }

      case "underline": {
        return CustomEditor.isUnderlineMarkActive(editor);
      }

      case "title": {
        return CustomEditor.isTitleBlockActive(editor);
      }

      case "subTitle": {
        return CustomEditor.isSubTitleBlockActive(editor);
      }

      case "numberedList": {
        return CustomEditor.isNumberedListBlockActive(editor);
      }

      case "bulletedList": {
        return CustomEditor.isBulletedListBlockActive(editor);
      }

      case "quote": {
        return CustomEditor.isQuoteBlockActive(editor);
      }

      case "alignCenter": {
        return CustomEditor.isalignCenterBlockActive(editor);
      }

      case "alignRight": {
        return CustomEditor.isAlignRightBlockActive(editor);
      }

      case "justify": {
        return CustomEditor.isJustifyBlockActive(editor);
      }

      default:
        return;
    }
  }

  function toggleMark(editor, format) {
    switch (format) {
      case "bold": {
        return CustomEditor.toggleBoldMark(editor);
      }

      case "italic": {
        return CustomEditor.toggleItalicMark(editor);
      }

      case "underline": {
        return CustomEditor.toggleUnderlineMark(editor);
      }

      case "title": {
        return CustomEditor.toggleTitleBlock(editor);
      }

      case "subTitle": {
        return CustomEditor.toggleSubTitleBlock(editor);
      }

      case "numberedList": {
        return CustomEditor.toggleNumberedListBlock(editor, format);
      }

      case "bulletedList": {
        return CustomEditor.toggleBulletedListBlock(editor, format);
      }

      case "quote": {
        return CustomEditor.toggleQuoteBlock(editor);
      }

      case "alignCenter": {
        return CustomEditor.togglealignCenterBlock(editor);
      }

      case "alignRight": {
        return CustomEditor.toggleAlignRightBlock(editor);
      }

      case "justify": {
        return CustomEditor.toggleJustifyBlock(editor);
      }

      default:
        return;
    }
  }

  const editor = useSlate();

  return (
    <Button
      isActive={isMarkActive(editor, format)}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
    >
      {children}
    </Button>
  );
};

const TitleElement = (props) => {
  return <StyledTitle {...props.attributes}>{props.children}</StyledTitle>;
};

const SubTitleElement = (props) => {
  return (
    <StyledSubTitle {...props.attributes}>{props.children}</StyledSubTitle>
  );
};

const NumberedListElement = (props) => {
  return (
    <ol {...props.attributes}>
      <li>{props.children}</li>
    </ol>
  );
};

const BulletedListElement = (props) => {
  return (
    <StyledBulletedList {...props.attributes}>
      <li>{props.children}</li>
    </StyledBulletedList>
  );
};

const QuoteElement = (props) => {
  return <StyledQuote {...props.attributes}>{props.children}</StyledQuote>;
};

const CodeElement = (props) => {
  return (
    <pre {...props.attributes} style={{ marginTop: "2rem" }}>
      <code>{props.children}</code>
    </pre>
  );
};

const AlignCenterElemement = (props) => {
  return (
    <p {...props.attributes} style={{ marginTop: "2rem", textAlign: "center" }}>
      {props.children}
    </p>
  );
};

const AlignRightElement = (props) => {
  return (
    <p {...props.attributes} style={{ marginTop: "2rem", textAlign: "right" }}>
      {props.children}
    </p>
  );
};

const JustfyElement = (props) => {
  return (
    <p
      {...props.attributes}
      style={{ marginTop: "1rem", textAlign: "justify" }}
    >
      {props.children}
    </p>
  );
};

const DefaultElement = (props) => {
  return (
    <p {...props.attributes} style={{ marginTop: "2rem" }}>
      {props.children}
    </p>
  );
};

export default RichText;
