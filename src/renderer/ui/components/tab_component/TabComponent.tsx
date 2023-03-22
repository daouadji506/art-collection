import { color } from '@assets/styles/color';
import DarkAddButton from '@components/buttons/dark_add_button';
import {
  FunctionComponent,
  MouseEvent,
  ReactNode,
  SVGProps,
  useRef,
  useState,
} from 'react';
import './style/index.scss';
import VerticalPanel from '@components/vertical_panel';
import { tooltip } from '@libs/overlay';
import ColorfulButton from '@components/buttons/colorful_button';

interface TabType {
  label: { text: string; icon?: FunctionComponent<SVGProps<SVGSVGElement>> };
  content: ReactNode;
}

interface TabComponentProps {
  items: TabType[];
  defaultSelected?: number;
  onChanged?: ({ item, index }: { item: string; index: number }) => void;
  menuItemsAlignment?: 'flex-start' | 'flex-end' | 'center';
  borderBottom?: boolean;
  onAdd?: (newTab: TabType) => void;
  foldedItems?: TabType[];
  flexGrow?: number;
  showVerticalPanel?: true;
}
export default function TabComponent({
  items,
  borderBottom = true,
  menuItemsAlignment = 'flex-start',
  defaultSelected = 0,
  foldedItems,
  flexGrow = 1,
  showVerticalPanel,
}: TabComponentProps) {
  const [{ items: allTabs, defaultSelected: activeTabIndex }, setAllTabs] =
    useState({
      items,
      defaultSelected,
    });
  const foldRef = useRef(foldedItems);
  const switchFoldToTab = (e?: MouseEvent<HTMLButtonElement>) => {
    if (e)
      tooltip(
        () =>
          foldRef?.current?.map((item) => ({
            text: item.label.text,
            onPress: () => {
              foldRef.current = foldRef.current?.filter(
                (foldItem) => foldItem != item,
              );
              setAllTabs((prev) => ({
                items: [...prev.items, item],
                defaultSelected: prev.items.length,
              }));
            },
          })),
        e.currentTarget,
        { autoClose: true },
      ).open();
  };

  return (
    <div className="tab-component" css={{ flexGrow: flexGrow }}>
      <div
        className="tab-menu-bar"
        css={{
          borderBottom: borderBottom
            ? `1px solid ${color.border_color}`
            : 'none',
          paddingBottom: borderBottom ? 10 : 0,
        }}
      >
        <div
          css={{ justifyContent: menuItemsAlignment }}
          className="menu-labels"
        >
          {allTabs.length > 0 &&
            allTabs.map(({ label }, index) => (
              <ColorfulButton
                alignment="center"
                key={index}
                text={label.text}
                fontSize={14}
                css={{
                  backgroundImage:
                    activeTabIndex == index ? color.primary : undefined,
                }}
                Icon={
                  label.icon
                    ? {
                        svg: label.icon,
                        iconType: 'stroke',
                        iconAfterColor: color.white,
                        iconColor:
                          activeTabIndex == index ? color.white : undefined,
                      }
                    : undefined
                }
                isActive={activeTabIndex == index}
                onPress={() => {
                  if (index != activeTabIndex)
                    setAllTabs((prev) => ({ ...prev, defaultSelected: index }));
                }}
              ></ColorfulButton>
            ))}
          {foldRef.current && foldRef.current.length > 0 && (
            <DarkAddButton onPress={switchFoldToTab} />
          )}
        </div>
      </div>
      {allTabs.length > 0 ? (
        <div className="menu-content">{allTabs[activeTabIndex]?.content} </div>
      ) : (
        showVerticalPanel && (
          <VerticalPanel
            description="No options added. "
            action={{
              text: 'add option',
              onClick: switchFoldToTab,
            }}
          />
        )
      )}
    </div>
  );
}
