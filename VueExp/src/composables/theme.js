import { ref } from "vue";

export const useTheme = () => {
    const darkTheme = ref(false);

    const toggleTheme = () => {
        if (darkTheme.value) {
            document.body.classList.add("dark-theme");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark-theme");
            localStorage.setItem("theme", "light");
        }
    };

    const initTheme = () => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            darkTheme.value = true;
            document.body.classList.add("dark-theme");
        }
    };

    return { darkTheme, toggleTheme, initTheme };
};
