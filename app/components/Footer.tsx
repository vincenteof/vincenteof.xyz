export default function Footer() {
  return (
    <footer className="py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <div>
            Made with ❤️ by vincenteof
          </div>
          <div>
            © {new Date().getFullYear()}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
