import type {
  ExternalProvider,
  JsonRpcFetchFunc,
} from "@ethersproject/providers";
import { Web3Provider } from "@ethersproject/providers";

export default function getLibrary(
  provider: ExternalProvider | JsonRpcFetchFunc
): Web3Provider {
  return new Web3Provider(provider);
}
