export type UserProfileProps = {
  title: string;
  name: string;
  education: string;
  techStack: string[];
  career: string;
  field: string;
  number: string;
  email: string;
  notionPageId: string;
  githubLink: string;
  aboutMe: string;
};

export const USER_PROFILE: UserProfileProps = {
  title: '프론트엔드개발자',
  name: '중써니',
  education: '한양대학교 전기공학과',
  career: `티맥스 슈퍼앱개발(2023~2024)`,
  field: 'three.js 3D interaction 전문가',
  techStack: ['react', 'javascript', 'typescript', 'html', 'css', 'aws', 'mongodb', 'nginx'],
  number: '010-1234-5678',
  email: 'sunny.music111@gmail.com',
  notionPageId: '9110d2048ce0460084a576c0b09c012c',
  githubLink: 'https://github.com/joong-sunny',
  aboutMe:
    '안녕하세요, 성장하는개발자 윤중선입니다.\n지금부터 제 소개를 시작해볼까 합니다.\n저에 대해 더 알고 싶으시다면\nScroll을 내려주세요.',
};
