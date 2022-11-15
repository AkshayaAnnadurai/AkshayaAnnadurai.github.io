import React from 'react'
import "./State.css"
import { SimpleGrid, Box } from '@chakra-ui/react'

const State= () => {
  return (
  <>
 <div class="skills">Github Statistics</div>
    <div class="mystats">
        <div>
            <img src="https://github-readme-stats.vercel.app/api?username=AkshayaAnnadurai&theme=tokyonight&hide_border=false&include_all_commits=false&count_private=true" alt="AkshayaAnnadurai"/>
        </div>
        <div>
            <img src="https://github-readme-streak-stats.herokuapp.com/?user=AkshayaAnnadurai&theme=tokyonight&hide_border=false" alt="AkshayaAnnadurai"/>
        </div>
        <div>
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=AkshayaAnnadurai&theme=tokyonight&hide_border=false&include_all_commits=false&count_private=true&layout=compact" alt="AkshayaAnnadurai"/>
        </div>
    </div>
    </>
  )
}

export default State


