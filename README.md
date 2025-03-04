# TodoApp


### directory structure

```
TodoApp/
│
├── assets/               # 이미지, 폰트, 스타일 등의 정적 리소스
│   ├── images/
│   └── fonts/
│
├── src/                  # 실제 코드가 위치하는 디렉토리
│   ├── api/              # 서버 API 통신 관련 코드
│   ├── components/       # 재사용 가능한 UI 컴포넌트들
│   ├── constants/        # 상수 파일 (색상, 폰트, 스타일 등)
│   ├── navigation/       # 네비게이션 관련 파일
│   ├── screens/          # 화면 구성 요소들 (로그인, 투두리스트 화면 등)
│   ├── store/            # 상태 관리 관련 코드 (Redux 또는 Context API 등)
│   ├── styles/           # 전역 스타일 (공통 스타일, 테마 등)
│   ├── utils/            # 유틸리티 함수들
│   └── App.js            # 루트 컴포넌트
│
├── android/              # Android-specific 설정
├── ios/                  # iOS-specific 설정
├── node_modules/         # 프로젝트 의존성
├── package.json          # 프로젝트 메타데이터 및 의존성 관리
├── babel.config.js       # Babel 설정
├── metro.config.js       # Metro bundler 설정
└── .gitignore            # Git에서 제외할 파일들
```
