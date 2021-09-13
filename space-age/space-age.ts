export function age(planet: string, seconds: number): number {
  const earthYear = seconds / 31557600;
  let answer = earthYear;
  switch (planet.toLowerCase()) {
    case "mercury":
      answer /= 0.2408467;
      break;
    case "venus":
      answer /= 0.61519726;
      break;
    case "earth":
      answer /= 1;
      break;
    case "mars":
      answer /= 1.8808158;
      break;
    case "jupiter":
      answer /= 11.862615;
      break;
    case "saturn":
      answer /= 29.447498;
      break;
    case "uranus":
      answer /= 84.016846;
      break;
    case "neptune":
      answer /= 164.79132;
      break;
  };
  return Number(answer.toFixed(2));
}
