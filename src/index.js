import '../src/style.scss';
import './keyboard/keyboard';
import './start_screen/startScreen';
import { startScreenGenerate } from "./start_screen/startScreen";
import './start_screen/startScreenButton';
import './waterUp/fallingCheck'




window.onload = function() {
      startScreenGenerate()
}
