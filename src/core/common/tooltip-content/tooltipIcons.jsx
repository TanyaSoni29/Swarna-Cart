/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import { Tooltip } from 'antd';
import PropTypes from 'prop-types';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';
import ImageWithBasePath from '../../img/imagewithbasebath';

const TooltipIcons = ({ columns, dataSource }) => {
	const handlePDFDownload = () => {
		const doc = new jsPDF();

		const tableColumn = columns?.map((col) => col.title);
		const tableRows = dataSource?.map((data) =>
			columns.map((col) => data[col.dataIndex])
		);

		autoTable(doc, {
			head: [tableColumn],
			body: tableRows,
		});

		doc.save('table-data.pdf');
	};

	const handleExcelDownload = () => {
		const tableData = dataSource?.map((data) =>
			columns?.reduce((acc, col) => {
				acc[col.title] = data[col.dataIndex];
				return acc;
			}, {})
		);

		const worksheet = XLSX.utils.json_to_sheet(tableData);
		const workbook = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
		XLSX.writeFile(workbook, 'table-data.xlsx');
	};

	return (
		<>
			<li>
				<Tooltip title='Pdf'>
					<Link
						to='#'
						onClick={handlePDFDownload}
					>
						<ImageWithBasePath
							src='assets/img/icons/pdf.svg'
							alt='img'
						/>
					</Link>
				</Tooltip>
			</li>
			<li>
				<Tooltip title='Excel'>
					<Link
						to='#'
						onClick={handleExcelDownload}
					>
						<ImageWithBasePath
							src='assets/img/icons/excel.svg'
							alt='img'
						/>
					</Link>
				</Tooltip>
			</li>
		</>
	);
};

TooltipIcons.propTypes = {
	columns: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			dataIndex: PropTypes.string.isRequired,
		})
	).isRequired,
	dataSource: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TooltipIcons;
