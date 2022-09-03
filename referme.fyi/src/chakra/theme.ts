import { extendTheme } from "@chakra-ui/react";
import '@fontsource/nunito'
import '@fontsource/sora'
export const theme = extendTheme({
    colors: {
        brand: {
            100: "#29CC98",
            900: "#1a202c",
        }
    },
    fonts: {
        body: `"Nunito", "Sora", sans-serif`,
    },
    styles: {
        global: () => ({
            body: {
                bg: "gray.100",
            }
        })
    }
})