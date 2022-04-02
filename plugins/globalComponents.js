import GlobalHeader from '@/components/molecules/GlobalHeader';
import InputSearch from '@/components/atoms/InputSearch';
import Featured from '@/components/templates/Featured';
import VideoList from '@/components/organism/VideosList';

import Vue from 'vue';

Vue.component(GlobalHeader.name, GlobalHeader);
Vue.component(InputSearch.name, InputSearch);
Vue.component(Featured.name, Featured);
Vue.component(VideoList.name, VideoList);
