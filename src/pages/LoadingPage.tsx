import { IsActiveState } from '../redux/features/isactiveSlice';
import { useSelector } from 'react-redux';

export default function LoadingPage() {
  const homePageLoading = useSelector(
    (state: IsActiveState) => state.isActive.active
  );
  return (
    <div className={`w-full absolute h-screen z-50 ${homePageLoading ? "animate-disable__scroll" : ""}`}>Testing</div>
  )
}
