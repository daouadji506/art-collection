import MainHeader from '@components/main_header';
import './style/index.scss';
import ImageGallery from '@components/image_gallery';
import LargeImagePanel from '@components/large_image_panel';
interface MainLayerProps {}
export default function MainLayer({}: MainLayerProps) {
  return (
    <div className="main-layer">
      <MainHeader />
      <LargeImagePanel />
      <ImageGallery />
    </div>
  );
}
