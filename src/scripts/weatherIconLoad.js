export function iconLoad(code, timeOfDay) {
      let dayCondition;
      let iconCode;
      let localPath;

      if (timeOfDay === 0) {
            dayCondition = `night`
      }else {
            dayCondition = `day`
      }

      iconCode = code.match(/\d{3}/gm)

      localPath = `img/weather_icon/${dayCondition}/${iconCode}.png`

      return localPath
}