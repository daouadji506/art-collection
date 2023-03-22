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
        backgroundColor={undefined}
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
