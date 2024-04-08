import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"
import type { LinksFunction } from "@remix-run/node"
import stylesheet from "~/tailwind.css?url"

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
]

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div>
          <nav className="px-10 pt-5">
            <Link to="/" prefetch="intent" className="text-2xl font-semibold">
              Movie <span className="text-teal-500">DB</span>
            </Link>
          </nav>
          {children}
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}
