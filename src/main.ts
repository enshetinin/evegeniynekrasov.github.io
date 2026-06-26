import './style.css';

const app = document.getElementById("app") as HTMLDivElement | undefined;

if (!app) throw new Error("root 'app' element is missing");

app.textContent = "Staring point";


