import { TableData } from '../Types';

export interface dataOutput {
  tableData: TableData[];
}

const useGenerateData = (number: number): dataOutput => {
  let tableData: TableData[] = [];
  for (let i = 0; i < number; i++) {
    tableData.push({
      title: 'Domain mapped site shows cors policy error',
      category: 'General WordPress',
      status: 'Open',
      date: new Date(2023, 7, 19, 12, 4),
      replies: {
        name: 'Staff Name',
        number: 2,
        isStaff: true,
        img: '/imgs/StaffName.png',
      },
    });
    tableData.push({
      title: 'After enabling cdn image sizes are big',
      category: 'The Hub',
      status: 'Open',
      date: new Date(2023, 8, 11, 12, 4),
      replies: {
        name: 'Member Name',
        number: 3,
        isStaff: false,
        img: '/imgs/MemberName.png',
      },
    });
    tableData.push({
      title: 'Google suggests to properly size images',
      category: 'Plugins & Themes - {Plugin_name}',
      status: 'Resolved',
      date: new Date(2023, 3, 3, 12, 4),
      replies: {
        name: 'Username Here',
        number: 2,
        isStaff: false,
        img: '/imgs/UsernameHere.png',
      },
    });
    tableData.push({
      title: 'Serve cached pages from cdn',
      category: 'Features & Feedback - {Plugin_name}',
      status: 'Resolved',

      date: new Date(2023, 3, 1, 12, 4),
      replies: {
        name: 'Jack Sean',
        number: 8,
        isStaff: false,
        img: '/imgs/JackSean.png',
      },
    });

    tableData.push({
      title: 'Blog updates notifications via email',
      category: 'Features & Feedback',
      status: 'Resolved',
      date: new Date(2023, 3, 2, 7, 12),
      replies: {
        name: 'Username Here',
        number: 2,
        isStaff: false,
        img: '/imgs/UsernameHere.png',
      },
    });
    tableData.push({
      title: 'How to make a an anchor link',
      category: 'General WordPress',
      status: 'Open',
      date: new Date(2023, 3, 1, 12, 4),
      replies: {
        name: '{Staff Name}',
        number: 2,
        isStaff: true,
        img: '/imgs/StaffName.png',
      },
    });
    tableData.push({
      title: 'After enabling cdn image sizes are big',
      category: 'The Hub',
      status: 'Open',
      date: new Date(2023, 3, 1, 12, 4),
      replies: {
        name: '{Staff Name}',
        number: 2,
        isStaff: true,
        img: '/imgs/StaffName.png',
      },
    });
    tableData.push({
      title: 'Serve cached pages from the cdn',
      category: 'Features & Feedback - {Plugin_name}',
      status: 'Feedback',
      date: new Date(2023, 3, 1, 12, 4),
      replies: {
        name: 'Jack Sean',
        number: 8,
        isStaff: false,
        img: '/imgs/JackSean.png',
      },
    });
    tableData.push({
      title: 'Blog updates notification via email',
      category: 'Features & Feedback',
      status: 'Resolved',
      date: new Date(2023, 3, 1, 9, 22),
      replies: {
        name: 'Username Here',
        number: 2,
        isStaff: false,
        img: '/imgs/StaffName.png',
      },
    });
    tableData.push({
      title: 'How to make an anchor link',
      category: 'General WordPress',
      status: 'Open',
      date: new Date(2023, 3, 1, 12, 4),
      replies: {
        name: '{Staff Name}',
        number: 2,
        isStaff: true,
        img: '/imgs/StaffName.png',
      },
    });
  }

  return {
    tableData,
  };
};

export default useGenerateData;
