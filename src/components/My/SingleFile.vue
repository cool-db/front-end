<template>
  <div class="single-file-box">
    <el-card class="single-file">
      <div class="file-pic">
        <img :src="tellType" alt=""/>
      </div>
      <div class="file-info">
        {{fileName}}{{fileType}}
      </div>
    </el-card>
  </div>

</template>

<script>
  import fileB0 from '@/assets/icons/file_type/file-b-0.png'
  import fileB1 from '@/assets/icons/file_type/file-b-1.png'
  import fileB2 from '@/assets/icons/file_type/file-b-2.png'
  import fileB3 from '@/assets/icons/file_type/file-b-3.png'
  import fileB4 from '@/assets/icons/file_type/file-b-4.png'
  import fileB6 from '@/assets/icons/file_type/file-b-6.png'
  import fileB7 from '@/assets/icons/file_type/file-b-7.png'
  import fileB9 from '@/assets/icons/file_type/file-b-9.png'
  import fileB10 from '@/assets/icons/file_type/file-b-10.png'
  import fileB11 from '@/assets/icons/file_type/file-b-11.png'
  export default {
    data () {
      return {
        fileB0,
        fileB1,
        fileB2,
        fileB3,
        fileB4,
        fileB6,
        fileB7,
        fileB9,
        fileB10,
        fileB11
      }
    },
    props: ['fileName', 'fileType'],
    computed: {
      tellType: function () {
        if (this.fileType === '') {
          return fileB0
        } else if (this.fileType === '.mp3' || this.fileType === '.m4a') {
          return fileB1
        } else if (this.fileType === '.zip' || this.fileType === '.rar') {
          return fileB2
        } else if (this.fileType === '.docx' || this.fileType === '.doc') {
          return fileB3
        } else if (this.fileType === '.pptx' || this.fileType === '.ppt') {
          return fileB4
        } else if (this.fileType === '.txt') {
          return fileB6
        } else if (this.fileType === '.pdf') {
          return fileB7
        } else if (this.fileType === '.jpg' || this.fileType === '.png') {
          return fileB9
        } else if (this.fileType === '.avi' || this.fileType === '.mp4') {
          return fileB10
        } else {
          return fileB11
        }
      }
    }
  }
</script>

<style scoped>
  .single-file-box{
    margin: 5px 20px;
    cursor: pointer;
  }

  .single-file{
    width: 148px;
    height: 180px;
  }

  .file-pic{
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
    width: 106px;
    height: 106px;
  }

  .file-info{
    width: 106px;
    height: 54px;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
  }
</style>
