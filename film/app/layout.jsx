import "../styles/globals.css"

const RootLayout = ({ children }) => {
    return (
        <html lang="fa-IR">
            <body>
                {children}
            </body>
        </html>
    )
}

export default RootLayout;