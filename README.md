# livn 🛋️

> 트렌디한 홈리빙/인테리어 소품 쇼핑몰 포트폴리오 프로젝트

🔗 **배포 URL**: https://livn-pdsu.vercel.app

---

## 🛠 기술 스택

| 분류       | 기술                         | 선택 이유                       |
| ---------- | ---------------------------- | ------------------------------- |
| 프레임워크 | React + Vite                 | 빠른 빌드, 최신 개발 환경       |
| 스타일     | Tailwind CSS                 | 빠른 UI 구현, 다크모드 지원     |
| 상태관리   | Zustand                      | 간결한 코드, 장바구니 상태 관리 |
| 라우팅     | React Router v6              | SPA 페이지 전환                 |
| Mock API   | json-server                  | 로컬 REST API 환경 구성         |
| 배포       | Vercel + Serverless Function | 프론트 + API 통합 배포          |

---

## 📌 주요 기능

- 상품 목록 조회 및 상세 페이지
- 장바구니 담기 / 수량 변경 / 삭제
- 주문 완료 페이지
- 로딩 스켈레톤 UI
- 다크모드 지원 (시스템 설정 연동)
- 반응형 레이아웃

---

## 🗂 DB 설계

실제 백엔드 연동을 가정한 테이블 구조입니다.

```
users
- id (PK)
- email
- created_at

products
- id (PK)
- name
- price
- category
- image
- description

orders
- id (PK)
- user_id (FK → users)
- total_price
- created_at

order_items
- id (PK)
- order_id (FK → orders)
- product_id (FK → products)
- quantity
- price
```

---

## 🏗 프로젝트 구조

```
src/
├── api/          # API 호출 함수
├── components/   # 공통 컴포넌트 (Header, Footer, SkeletonCard)
├── hooks/        # 커스텀 훅 (useDarkMode)
├── pages/        # 페이지 컴포넌트
├── store/        # Zustand 상태관리
└── data/         # Mock 데이터
```

---

## 💻 로컬 실행

```bash
# 패키지 설치
npm install

# 개발 서버 + Mock API 동시 실행 (터미널 2개)
npm run dev
npx json-server --watch db.json --port 3001
```
