# LIVIN

> React 기반으로 커머스 서비스의 핵심 사용자 흐름과 상태관리 구조를 구현한 포트폴리오 프로젝트

- 🔗 **배포 URL**: https://livn-rose.vercel.app/
- 📚 **Storybook (Chromatic)**: https://main--69df25ecd988b74cfddf6bf7.chromatic.com/

---

## 🛠 기술 스택

| 분류            | 기술                         | 선택 이유                                |
| --------------- | ---------------------------- | ---------------------------------------- |
| 프레임워크      | React + Vite + TypeScript    | 빠른 빌드, 타입 안정성 확보              |
| 스타일          | Tailwind CSS                 | 빠른 UI 구현, 다크모드 지원              |
| 상태관리        | Zustand                      | 간결한 코드, 장바구니 상태 관리          |
| 서버 상태       | TanStack Query (React Query) | API 캐싱, 로딩/에러 상태 자동 관리       |
| 라우팅          | React Router v6              | SPA 페이지 전환                          |
| 애니메이션      | Framer Motion                | 페이지 전환 및 UI 인터랙션               |
| Mock API        | json-server                  | 로컬 REST API 환경 구성                  |
| 배포            | Vercel + Serverless Function | 프론트 + API 통합 배포                   |
| 컴포넌트 문서화 | Storybook + Chromatic        | UI 컴포넌트 시각화 및 시각적 회귀 테스트 |

---

## 📌 주요 기능

- 상품 목록 조회 / 카테고리 필터 / 검색 (debounce 적용) / 가격순 정렬
- 상품 상세 페이지 (스펙, HTML 상세정보, 구매평, Q&A 탭)
- 장바구니 담기 / 수량 변경 / 삭제 / 이미 담긴 상품 상태 표시
- 주문서 입력 폼 (유효성 검사 포함) → 주문 완료 페이지
- 로딩 스켈레톤 UI
- 다크모드 지원 (localStorage 연동)
- 페이지 전환 애니메이션
- 토스트 알림
- 반응형 레이아웃
- 404 페이지

---

## ⚙️ 기술적 의사결정

### Zustand

Redux 대비 보일러플레이트가 적고, 장바구니처럼 클라이언트 상태관리에 최적화되어 있습니다.

### TanStack Query

`useEffect` + `useState` 방식에서 벗어나, `staleTime` 5분 캐시로 불필요한 API 재호출을 줄였습니다.

### Vercel Serverless Function

json-server는 로컬 전용이므로, 배포 환경에서 동일한 REST API 구조를 Serverless Function으로 구현했습니다.

### useMemo 최적화

카테고리 필터 + 검색 + 정렬이 복합적으로 동작하는 상품 목록을 `useMemo`로 최적화했습니다.

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
- detail (JSON: specs[], html?)

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

reviews
- id (PK)
- product_id (FK → products)
- author
- rating
- content
- date
```

---

## 🏗 프로젝트 구조

```
src/
├── api/            # API 호출 함수 (productApi, reviewApi)
├── components/     # 공통 컴포넌트 (Header, Footer, Toast, SkeletonCard 등)
├── hooks/          # 커스텀 훅 (useProducts, useProduct, useReviews, useDarkMode, useDebounce)
├── pages/          # 페이지 컴포넌트 (Home, ProductDetail, Cart, Order, OrderComplete, NotFound)
├── store/          # Zustand 상태관리 (cartStore, toastStore)
├── stories/        # Storybook 컴포넌트 문서
├── types/          # TypeScript 타입 정의
└── data/           # Mock 데이터 (products.json, reviews.json)

api/                # Vercel Serverless Functions
├── products.ts
├── reviews.ts
└── products/
    └── [id].ts
```

---

## 💻 로컬 실행

```bash
# 패키지 설치
npm install

# 개발 서버 + Mock API 동시 실행 (터미널 2개)
npm run dev
npx json-server --watch db.json --port 3001

# Storybook 실행
npm run storybook
```
