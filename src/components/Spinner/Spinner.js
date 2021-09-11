import Loader from 'react-loader-spinner';
import { Wrapper } from './StyledComponent';

export function Spinner() {
  return (
    <Wrapper>
      <Loader width={100} height={75} type="Grid" />
    </Wrapper>
  );
}
