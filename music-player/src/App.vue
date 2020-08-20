<template>
  <div id="app">
    <section class="el-container is-vertical">
      <header class="el-header" style="height: 60px;">
        <div class="search_bar">
          <el-input
            type="text"
            autocomplete="off"
            v-model="query"
            @keyup.enter.native="searchMusic"
            style="width:25%"
          ></el-input>
        </div>
      </header>
      <section class="el-container">
        <aside class="el-aside" style="width: 400px;">
          <el-table :data="musicList" style="width: 100%" height="550" v-show="flag">
            <el-table-column prop="name" label="歌名" width="150px"></el-table-column>
            <el-table-column prop="author" width="150px" label="歌手"></el-table-column>
            <el-table-column>
              <template slot-scope="scope">
                <el-button
                  type="primary"
                  icon="el-icon-caret-right"
                  size="medium"
                  @click="playMusic(scope.row)"
                  circle
                ></el-button>
              </template>
            </el-table-column>
          </el-table>
        </aside>
        <section class="el-container is-vertical">
          <main
            class="el-main"
            style="padding-left:40px padding-right:40px height:500px margin-top:50px "
          >
            <el-card style="height:500px;width:450px;text-align:center;margin-left:300px">
              <img
                :src="picUrl"
                class="image"
                style="
                    height: 100%;
    width: 100%;
"
              />
              <div style="padding: 14px;">
                <span style="text-align:left">{{curMusic}}</span>
              </div>
            </el-card>
          </main>
          <footer class="el-footer" style="height: 75px;">
            <audio style="height: 75px;width:800px" ref="audio" :src="musicUrl" controls></audio>
          </footer>
        </section>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      query: "",
      musicList: [],
      musicUrl: "",
      flag: 0,
      picUrl: "",
      curMusic: "",
    };
  },
  methods: {
    searchMusic: function () {
      this.musicList = [];
      this.flag = 1;
      console.log("111");
      var that = this;
      axios.get("/api" + `/search?keywords=${this.query}/`).then(
        function (response) {
          console.log(response);
          for (var i = 0; i < response.data.result.songs.length; i++) {
            var temp = {
              name: response.data.result.songs[i].name,
              id: response.data.result.songs[i].id,
              author: response.data.result.songs[i].artists[0].name,
            };
            that.musicList.push(temp);
          }
        },
        function (err) {}
      );
    },
    playMusic: function (id) {
      this.curMusic = id.name;
      console.log(id.id);
      var that = this;
      id = id.id;
      var auto = document.getElementsByTagName("audio");
      auto[0].autoplay = true;
      axios.get("api" + `song/url?id=${id}`).then(function (response) {
        console.log(response);
        that.musicUrl = response.data.data[0].url;
      });

      axios.get("api" + `song/detail?ids=${id}`).then(function (response) {
        that.picUrl = response.data.songs[0].al.picUrl;
      });
    },
  },
};
</script>

<style>
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 800px;
}

h1,
h2 {
  font-weight: normal;
}

a {
  color: #42b983;
}

.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}



.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>
