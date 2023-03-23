import color from '@assets/styles/color';
import TextButton from '../text_button';
import './style/index.scss';
import { ComponentProps } from 'react';
interface ColorfulButtonProps {
  isActive?: boolean;
  blend?: true;
}
export default function ColorfulButton({
  isActive = false,
  fontColor: fontColor = color.white,
  blend,
  ...others
}: ColorfulButtonProps &
  Omit<
    ComponentProps<typeof TextButton>,
    | 'backgroundColor'
    | 'borderColor'
    | 'afterBgColor'
    | 'afterBorderColor'
    | 'radius'
  >) {
  return (
    <div className="colorful-border">
      <TextButton
        fontColor={fontColor}
        fontSize={14}
        backgroundColor={
          'linear-gradient(rgb(41, 43, 51), rgb(41, 43, 51)) no-repeat padding-box, linear-gradient(81.02deg, rgb(250, 85, 96) -23.47%, rgb(177, 75, 244) 45.52%, rgb(77, 145, 255) 114.8%) border-box'
        }
        afterBgColor={undefined}
        // borderColor={!isActive ? color.primary : undefined}
        radius={9}
        css={{
          backgroundImage: isActive && !blend ? color.primary : undefined,
        }}
        {...others}
      />
    </div>
  );
}
