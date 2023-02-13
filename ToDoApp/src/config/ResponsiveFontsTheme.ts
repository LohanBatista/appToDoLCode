import {Dimensions, PixelRatio} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

// Retrieve initial screen's width
const screenWidth = Dimensions.get('window').width;

// Retrieve initial screen's height
const screenHeight = Dimensions.get('window').height;

/**
 * Converts provided width in pixel to (dp).
 * @param  {number} widthInPixel in styled components add 'px' at the end
 * ---> example:
 * styled-components: ( width: ${widthInPixel(10)}px ),
 * style-sheet: ( width: widthInPixel(10) )
 * @return {number}
 * the DP calculation of type number will be returned
 *
 */

//EIXO X
export const widthInPixelToDP = (widthInPixel: number) => {
  // Convert pixel to percentage
  const widthPercent = (widthInPixel * 100) / screenWidth;

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((screenWidth * widthPercent) / 100);
};

/**
 * Converts provided height in pixel to (dp).
 * @param  {number} heightInPixel in styled components add 'px' at the end
 * ---> example:
 * styled-components: ( height: ${heightInPixel(10)}px ),
 * style-sheet: ( height: heightInPixel(10) )
 * @return {number}
 * the DP calculation of type number will be returned
 */

//EIXO Y
export const heightInPixelToDP = (heightInPixel: number) => {
  // Convert pixel to percentage
  const heightPercent = (heightInPixel * 100) / screenHeight;

  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that correspons to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((screenHeight * heightPercent) / 100);
};

/**
 * Converts provided font size in pixel to (dp).
 * @param  {number} fontInPixel in styled components add 'px' at the end
 * ---> example:
 * styled-components: ( font-size: ${fontInPixel(10)}px ),
 * style-sheet: ( fontSize: fontInPixel(10) )
 * @return {number}
 * the DP calculation of type number will be returned
 */

//FONTE
export const fontInPixelToDP = (fontInPixel: number) => {
  return RFValue(fontInPixel);
};
