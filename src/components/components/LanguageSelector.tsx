// /$$$$$$  /$$$$$$ /$$    /$$ /$$$$$$$$       /$$      /$$ /$$$$$$$$        /$$$$$$           /$$$$$  /$$$$$$  /$$$$$$$ 
// /$$__  $$|_  $$_/| $$   | $$| $$_____/      | $$$    /$$$| $$_____/       /$$__  $$         |__  $$ /$$__  $$| $$__  $$
// | $$  \__/  | $$  | $$   | $$| $$            | $$$$  /$$$$| $$            | $$  \ $$            | $$| $$  \ $$| $$  \ $$
// | $$ /$$$$  | $$  |  $$ / $$/| $$$$$         | $$ $$/$$ $$| $$$$$         | $$$$$$$$            | $$| $$  | $$| $$$$$$$ 
// | $$|_  $$  | $$   \  $$ $$/ | $$__/         | $$  $$$| $$| $$__/         | $$__  $$       /$$  | $$| $$  | $$| $$__  $$
// | $$  \ $$  | $$    \  $$$/  | $$            | $$\  $ | $$| $$            | $$  | $$      | $$  | $$| $$  | $$| $$  \ $$
// |  $$$$$$/ /$$$$$$   \  $/   | $$$$$$$$      | $$ \/  | $$| $$$$$$$$      | $$  | $$      |  $$$$$$/|  $$$$$$/| $$$$$$$/
// \______/ |______/    \_/    |________/      |__/     |__/|________/      |__/  |__/       \______/  \______/ |_______/ 
//
// Hi, I'm Roland and i'm looking for a job.
// Resume in /public/resume.pdf
// roland.vrignon@roland.com
// https://www.linkedin.com/in/roland-vrignon/
//


'use client';

type Language = {
  code: string;
  name: string;
};

const languages: Language[] = [
  { code: 'fr', name: 'Français' },
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
];

export const LanguageSelector = ({ onSelect }: { onSelect: (lang: string) => void }) => {
  return (
    <select
      onChange={(e) => onSelect(e.target.value)}
      className="px-4 py-2 rounded-lg border-2 border-gray-300"
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.name}
        </option>
      ))}
    </select>
  );
}

export default LanguageSelector;