import { FC, useEffect, useState } from "react";
import { useMount } from "react-use";
import $axios from "../../../utils/request";
import { Loading } from "../Loading";

export const Sidebar: FC<any> = (props) => {

  const [comments, setComments] = useState<any>([]);
  const [isLoadingComments, setIsLoadingComments] = useState<boolean>(true);
  // articles
  const [articles, setArticles] = useState<any>([]);
  const [isLoadingArticles, setIsLoadingArticles] = useState<boolean>(true);

  useMount(() => {
    $axios.get(`/comments/list?select=author,text&limit=5`).then(res => {
      // return res.data.data.
      setComments(res.data.data);
      setIsLoadingComments(false);
    })
    $axios.get(`/posts/list?select=id,title,path,slug,createdAt&limit=5`).then(res => {
      setArticles(res.data.data);
      setIsLoadingArticles(false);
    })
  })

  return (
    <div className="flex flex-col justify-between w-full mt-5 ml-0 md:w-60 md:flex-shrink-0 md:mt-0 md:ml-3">
      <div className="sticky top-16">

        <div className="p-3 mt-3 boxes sm:box">
          <div className="flex justify-between">
            <div className="flex">
              <div>
                <h4>随机一言</h4>
                <span className="text-gray-400 text-xs"><p id="hitokoto"><span id="hitokoto_text">
                  一切真实与虚假，一切辉煌与破灭，只存后人之言，只存岁月之中。
                </span></p></span>
              </div>
            </div>
          </div>
        </div>



        {/* <div className="p-3 mt-3 boxes sm:box">
          <strong>文章目录</strong>
          <div id="toc" className="TOC-text toc mt-2">
              
          </div>
        </div> */}


        <div className="p-3 mt-3 boxes sm:box">
          <div>
            <h4>最新评论</h4>
          </div>

          {
            comments ? comments.map((item,index) => {
              return (<div key={index} className="flex items-center pt-3 mt-3 border-t border-color text-sm tips--top">
              <img className="h-5 w-5 object-cover rounded mr-3" src="https://q1.qlogo.cn/g?b=qq&nk=120340560&s=640" alt={item.author} />
              <span className="news-comments-content"><a href="" className="ell">{item.text}</a></span>
            </div>)
            }) : <Loading isLoading={isLoadingComments} />
          }

        </div>


        <div className="p-3 mt-3 boxes sm:box">
          <div>
            <h4>随机文章</h4>
          </div>

          {
            articles ? articles.map((item,index) => {
              return (
                <div key={index} className="flex items-center pt-3 mt-3 border-t border-color text-sm">
                {/* <div className="h-12 w-20 rounded mr-3 flex-1"> */}
                  {/* <img className="h-full w-full object-cover rounded" src={`https://api.ixiaowai.cn/mcapi/mcapi.php?${index}`} alt="A-My全新升级2.0版本！ " /> */}
                {/* </div> */}
                <span className="grid flex-4 sm:flex-5 md:flex-2">
                  <a href={`/posts/${item.slug}/${item.path}`} className="mb-2 ell">
                    {item.title}
                    </a>
                  <small> {item.createdAt ? item.createdAt.split('T')[0].replace(/-/g, '-'): null}</small>
                </span>
              </div>
              )}) : <Loading isLoading={isLoadingArticles} />
          }
          

        </div>
        {/* 
        <?php
            $txt = $this->options->sidebar_box;
        $string_arr = explode("\r\n", $txt);
        $long = count($string_arr);
        for ($i = 0; $i < $long; $i++) {
          $title = explode(",", $string_arr[$i])[0];
        $content = explode(",", $string_arr[$i])[1];
            ?> */}

        {/* <div className="p-3 mt-3 boxes sm:box">
          <div className="pb-2 border-b border-color">
            <h4></h4>
          </div>
          <div className="py-3">

          </div>
        </div> */}


      </div>
    </div >
  )
}