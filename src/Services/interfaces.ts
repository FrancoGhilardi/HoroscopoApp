import {QueryObserverResult, RefetchOptions} from '@tanstack/react-query';

export interface IHoroscopo {
  zodiac_signs: TZodialSings;
  videos: TVideos;
}

type TZodialSings = IZodialSings[];
type TVideos = IVideo[];

export interface IZodialSings {
  id: number;
  name: string;
  init_date: string;
  end_date: string;
  prediction: string;
  image: string;
}

interface IVideo {
  id: number;
  url: string;
}

export interface IHookGet {
  data: IHoroscopo | undefined;
  isLoading: boolean;
  refetch: (
    options?: RefetchOptions | undefined,
  ) => Promise<QueryObserverResult<IHoroscopo, Error>>;
}
