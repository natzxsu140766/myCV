# Project memory

## Product intent & audience

- Personal portfolio website for user (GitHub username: natzxsu140766)
- Audience: visitors exploring the user's profile, work, and contact info

## Brand personality & voice

- Professional yet polished; presentation leans "beautiful, not cookie cutter" per global instructions
- Tone is elegant and production-worthy

## Visual design & UX direction

- Contact section uses card-based layout (GitHub, Email, LinkedIn)
- External links open in new tab; small link icon appears on hover
- Email and LinkedIn are placeholder cards pending real info
- Icons via lucide-react; styling via Tailwind CSS
- Components/modules imported via `@/` path alias (maps to `src/`)

## Decisions, constraints & rationale

- Framework: vite-react (JSX + Tailwind + React hooks + lucide-react)
- Avoid installing extra UI/icon/theme packages unless explicitly requested
- GitHub card linked to real profile: `https://github.com/natzxsu140766`
- Email and LinkedIn kept as elegant placeholders until user provides them
- Build verified passing after GitHub link addition

## Open questions & assumptions

- Real email address not yet provided (placeholder)
- Real LinkedIn profile URL not yet provided (placeholder)
- Other portfolio sections (about, projects, experience) not yet discussed in captured context